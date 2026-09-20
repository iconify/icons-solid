import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/apmey5ikj.css';
import '../../css/r/rn5l7u0ji.css';
import '../../css/q/qmx_0jbvl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="apmey5ikj"/><path class="rn5l7u0ji"/><path class="qmx_0jbvl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:rocket-5"} {...others} />);
}

export default Component;
