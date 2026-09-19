import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p70oy3bjg.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="p70oy3bjg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"akar-icons:pentagon-fill"} {...others} />);
}

export default Component;
