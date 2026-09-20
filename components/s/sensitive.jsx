import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hi_ym-bhd.css';
import '../../css/d/d6kw7zb0t.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hi_ym-bhd"/><path class="d6kw7zb0t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:sensitive"} {...others} />);
}

export default Component;
