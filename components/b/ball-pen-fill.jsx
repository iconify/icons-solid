import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cobpw81wq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cobpw81wq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:ball-pen-fill"} {...others} />);
}

export default Component;
