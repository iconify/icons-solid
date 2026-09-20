import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jtat2y9dp.css';
import '../../css/f/f29qyf3ac.css';

const viewBox = {"width":32,"height":32};
const content = `<circle class="jtat2y9dp"/><path class="f29qyf3ac"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:circleci-light"} {...others} />);
}

export default Component;
