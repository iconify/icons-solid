import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c_-jdccjs.css';
import '../../css/s/sg9i7d4jt.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="c_-jdccjs"/><rect class="sg9i7d4jt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uim:lock"} {...others} />);
}

export default Component;
