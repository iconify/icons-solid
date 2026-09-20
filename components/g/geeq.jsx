import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b80592p_t.css';
import '../../css/b/b1k_d4bpa.css';
import '../../css/f/fpu345b5a.css';
import '../../css/i/i6_9ppfpw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="b80592p_t"/><path class="b1k_d4bpa"/><path class="fpu345b5a"/><path class="i6_9ppfpw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:geeq"} {...others} />);
}

export default Component;
