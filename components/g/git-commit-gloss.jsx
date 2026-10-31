import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mu_un6b5x.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mu_un6b5x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:git-commit-gloss"} {...others} />);
}

export default Component;
