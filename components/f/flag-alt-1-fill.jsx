import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m2irib6yu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="m2irib6yu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si:flag-alt-1-fill"} {...others} />);
}

export default Component;
