import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nu1lb4brs.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nu1lb4brs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:currency-guarani"} {...others} />);
}

export default Component;
