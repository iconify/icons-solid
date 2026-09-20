import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gql5y_bcl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gql5y_bcl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:increase-decrease-fill"} {...others} />);
}

export default Component;
