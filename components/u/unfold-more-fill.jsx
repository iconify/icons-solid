import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vv4eu2o7d.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="vv4eu2o7d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si:unfold-more-fill"} {...others} />);
}

export default Component;
