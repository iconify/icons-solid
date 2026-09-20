import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lbp3s3hkl.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="lbp3s3hkl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:stone-wall-with-battlement-and-sallyport"} {...others} />);
}

export default Component;
