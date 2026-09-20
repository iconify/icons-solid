import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k-vo48bkp.css';
import '../../css/z/zechxbl9f.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="k-vo48bkp"/><path class="zechxbl9f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:certified-diploma-bold"} {...others} />);
}

export default Component;
