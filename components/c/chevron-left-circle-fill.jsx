import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g8zje8b0p.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="g8zje8b0p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si:chevron-left-circle-fill"} {...others} />);
}

export default Component;
