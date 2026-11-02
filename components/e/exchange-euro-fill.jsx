import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ywe0yq7db.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ywe0yq7db"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:exchange-euro-fill"} {...others} />);
}

export default Component;
