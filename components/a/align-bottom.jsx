import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/iodfmuort.css';
import '../../css/a/a2v6moblm.css';
import '../../css/h/ho04rx1gx.css';
import '../../css/t/tv0yj9xtz.css';
import '../../css/j/jifkjtbqf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><rect transform="matrix(1 0 0 -1 3.78 18.95)" class="iodfmuort"/><rect transform="matrix(1 0 0 -1 13.8 18.95)" class="a2v6moblm"/><rect transform="matrix(1 0 0 -1 3.78 18.95)" class="ho04rx1gx"/><rect transform="matrix(1 0 0 -1 13.8 18.95)" class="tv0yj9xtz"/><path class="jifkjtbqf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:align-bottom"} {...others} />);
}

export default Component;
