import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i93fv4b0r.css';
import '../../css/x/xj2gq3bwa.css';
import '../../css/u/uilqb5bzk.css';
import '../../css/e/eclqqr0_t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="i93fv4b0r"/><path class="xj2gq3bwa"/><circle class="uilqb5bzk"/><path class="eclqqr0_t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:reload-check"} {...others} />);
}

export default Component;
