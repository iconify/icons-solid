import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h14fegbgq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="h14fegbgq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:renren-logo-2-solid"} {...others} />);
}

export default Component;
