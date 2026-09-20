import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/ju6kq_tox.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ju6kq_tox"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:arrow-expand"} {...others} />);
}

export default Component;
