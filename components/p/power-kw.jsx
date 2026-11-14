import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tbdzc5bem.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tbdzc5bem"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"evicons:power-kw"} {...others} />);
}

export default Component;
