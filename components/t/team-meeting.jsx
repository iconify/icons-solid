import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/s/skpuwqb8f.css';
import '../../css/f/fpr7cciqd.css';
import '../../css/k/k06zoub9y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="skpuwqb8f"/><path class="fpr7cciqd"/><path class="k06zoub9y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:team-meeting"} {...others} />);
}

export default Component;
