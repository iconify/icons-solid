import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/haca98uoa.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="haca98uoa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:price-tag-2-fill"} {...others} />);
}

export default Component;
