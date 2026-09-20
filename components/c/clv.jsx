import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c_jnuvdjl.css';
import '../../css/o/o612zrb8g.css';
import '../../css/e/evd2pbhad.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="c_jnuvdjl"/><path class="o612zrb8g"/><path class="evd2pbhad"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:clv"} {...others} />);
}

export default Component;
