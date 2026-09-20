import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iusjz_bzl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="iusjz_bzl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:database-settings"} {...others} />);
}

export default Component;
