import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/d/da3r7lk0q.css';
import '../../css/c/cq9m21bdq.css';
import '../../css/o/omcq2obdb.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="t_2lkqbxb"><path class="da3r7lk0q"/><path class="cq9m21bdq"/><path class="omcq2obdb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:haml"} {...others} />);
}

export default Component;
