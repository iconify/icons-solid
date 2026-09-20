import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c7gntf5tm.css';
import '../../css/s/sbi9n7bck.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="c7gntf5tm"/><path class="sbi9n7bck"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:hubble-exchange"} {...others} />);
}

export default Component;
