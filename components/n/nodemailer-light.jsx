import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n-3vrkbik.css';
import '../../css/b/b3xfc2b-l.css';
import '../../css/j/j_dfhbbfa.css';
import '../../css/i/i43tj_8lo.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="n-3vrkbik"/><path class="b3xfc2b-l"/><path class="j_dfhbbfa"/><path class="i43tj_8lo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:nodemailer-light"} {...others} />);
}

export default Component;
