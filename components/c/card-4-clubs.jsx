import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bmuk_416i.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="bmuk_416i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:card-4-clubs"} {...others} />);
}

export default Component;
