import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/o/o4nuulbsj.css';
import '../../css/f/f05npmyne.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="o4nuulbsj"/><path class="f05npmyne"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:audio-file-mp-3"} {...others} />);
}

export default Component;
