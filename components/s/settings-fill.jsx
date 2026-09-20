import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eq7duib7h.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="eq7duib7h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:settings-fill"} {...others} />);
}

export default Component;
