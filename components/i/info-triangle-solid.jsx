import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/onw5m771l.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="onw5m771l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"basil:info-triangle-solid"} {...others} />);
}

export default Component;
