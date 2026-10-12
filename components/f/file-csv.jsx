import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o9lht4boe.css';
import '../../css/e/elbmzxbbp.css';
import '../../css/s/s3skchbtt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="o9lht4boe"/><path class="elbmzxbbp"/><path class="s3skchbtt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:file-csv"} {...others} />);
}

export default Component;
