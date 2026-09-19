import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ezdp1hbyx.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="ezdp1hbyx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:tune-horizontal-alt"} {...others} />);
}

export default Component;
