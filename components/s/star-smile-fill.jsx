import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n_n5rqe1t.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="n_n5rqe1t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:star-smile-fill"} {...others} />);
}

export default Component;
