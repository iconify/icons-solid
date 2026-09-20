import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m11n33b9i.css';
import '../../css/x/xt5xc0eya.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="m11n33b9i"/><path class="xt5xc0eya"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:signout"} {...others} />);
}

export default Component;
