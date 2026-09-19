import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bkljblwjh.css';
import '../../css/n/nb72zx0al.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bkljblwjh"/><path class="nb72zx0al"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:school"} {...others} />);
}

export default Component;
