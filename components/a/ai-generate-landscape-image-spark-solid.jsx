import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c31fne1bq.css';
import '../../css/i/i_izlqb6a.css';
import '../../css/o/o0huw_n8w.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="c31fne1bq"/><path class="i_izlqb6a"/><path clip-rule="evenodd" class="o0huw_n8w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:ai-generate-landscape-image-spark-solid"} {...others} />);
}

export default Component;
