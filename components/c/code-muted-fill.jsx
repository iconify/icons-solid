import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rgkj1ktcz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rgkj1ktcz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si:code-muted-fill"} {...others} />);
}

export default Component;
