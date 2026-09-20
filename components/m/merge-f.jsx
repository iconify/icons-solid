import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s3hoj7_rq.css';

const viewBox = {"width":24,"height":24,"left":-4,"top":-2};
const content = `<path class="s3hoj7_rq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"jam:merge-f"} {...others} />);
}

export default Component;
