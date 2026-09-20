import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k55sakbtr.css';
import '../../css/i/ibrld782c.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="k55sakbtr"/><path class="ibrld782c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uim:apple-alt"} {...others} />);
}

export default Component;
