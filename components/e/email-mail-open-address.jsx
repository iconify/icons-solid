import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/liar723_x.css';
import '../../css/e/e85963y7t.css';
import '../../css/b/blqbp4b6s.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="liar723_x"/><path class="e85963y7t"/><path class="blqbp4b6s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:email-mail-open-address"} {...others} />);
}

export default Component;
