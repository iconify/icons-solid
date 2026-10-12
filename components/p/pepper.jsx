import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m2129rw9x.css';
import '../../css/q/qf2qi3fpd.css';
import '../../css/w/wp3ssvtvs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="m2129rw9x"/><path class="qf2qi3fpd"/><path class="wp3ssvtvs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:pepper"} {...others} />);
}

export default Component;
