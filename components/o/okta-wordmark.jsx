import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j0ndb3slp.css';
import '../../css/v/vpm5wbcdy.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="j0ndb3slp"/><path class="vpm5wbcdy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:okta-wordmark"} {...others} />);
}

export default Component;
