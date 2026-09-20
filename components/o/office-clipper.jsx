import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/u/uvs3strwr.css';
import '../../css/h/hmm9q7hvm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="uvs3strwr"/><path class="hmm9q7hvm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:office-clipper"} {...others} />);
}

export default Component;
