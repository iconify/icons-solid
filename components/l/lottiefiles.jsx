import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xnw54xggm.css';
import '../../css/v/vi0lh-h6r.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xnw54xggm"/><path class="vi0lh-h6r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uim:lottiefiles"} {...others} />);
}

export default Component;
