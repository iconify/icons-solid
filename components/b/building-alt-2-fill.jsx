import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eyq5_6mmm.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="eyq5_6mmm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si:building-alt-2-fill"} {...others} />);
}

export default Component;
