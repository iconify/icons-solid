import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ezdg7vhee.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="ezdg7vhee"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:layers-1-remix"} {...others} />);
}

export default Component;
