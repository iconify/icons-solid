import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c3eqq92lc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="c3eqq92lc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eva:person-delete-fill"} {...others} />);
}

export default Component;
