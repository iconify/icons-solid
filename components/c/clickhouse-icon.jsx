import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":257};
const content = `<style>.rdkxsebgr {
  d: path("M0 2.983C0 1.243 1.243 0 2.983 0H25.35c1.74 0 2.983 1.243 2.983 2.983v250.283c0 1.74-1.243 2.983-2.983 2.983H2.983c-1.74 0-2.983-1.243-2.983-2.983zm56.917 0c0-1.74 1.242-2.983 2.982-2.983h22.369c1.74 0 2.982 1.243 2.982 2.983v250.283c0 1.74-1.242 2.983-2.982 2.983H59.899c-1.74 0-2.982-1.243-2.982-2.983zm56.916 0c0-1.74 1.243-2.983 2.983-2.983h22.368c1.74 0 2.983 1.243 2.983 2.983v250.283c0 1.74-1.243 2.983-2.983 2.983h-22.368c-1.74 0-2.983-1.243-2.983-2.983zm56.917 0c0-1.74 1.242-2.983 2.982-2.983h22.369c1.74 0 2.982 1.243 2.982 2.983v250.283c0 1.74-1.242 2.983-2.982 2.983h-22.369c-1.74 0-2.982-1.243-2.982-2.983zm56.916 99.666c0-1.74 1.243-2.983 2.983-2.983h22.368c1.74 0 2.983 1.243 2.983 2.983V153.6c0 1.74-1.243 2.983-2.983 2.983H230.65c-1.74 0-2.983-1.243-2.983-2.983z");
}
</style><path class="rdkxsebgr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"logos:clickhouse-icon"} {...others} />);
}

export default Component;
