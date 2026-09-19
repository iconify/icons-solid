import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a2z5i8bzr.css';
import '../../css/q/q-24mgbnq.css';
import '../../css/x/xwymr9bng.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="a2z5i8bzr"/><path class="q-24mgbnq"/><path class="xwymr9bng"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gcp:database-migration-service"} {...others} />);
}

export default Component;
