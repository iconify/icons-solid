import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eqgyivqlw.css';
import '../../css/v/v_vy3cc5z.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="eqgyivqlw"/><path class="v_vy3cc5z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:kda"} {...others} />);
}

export default Component;
