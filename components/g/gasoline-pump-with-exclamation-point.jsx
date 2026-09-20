import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iio2e3udq.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="iio2e3udq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:gasoline-pump-with-exclamation-point"} {...others} />);
}

export default Component;
