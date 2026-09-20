import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x_93pgbru.css';
import '../../css/r/ra-4wynoj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="x_93pgbru"/><path class="ra-4wynoj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si:sign-out-alt-fill"} {...others} />);
}

export default Component;
