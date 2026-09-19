import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.r2s2lxbiy {
  fill: currentColor;
  d: path("m21.68 9.71l-3.72 8.19c-.23.49-.96.33-.96-.21V11h-1.5c-.28 0-.5-.22-.5-.5v-6c0-.28.22-.5.5-.5h5.76c.35 0 .6.36.46.69L20 9h1.22c.37 0 .61.38.46.71M15 13v7H4c-1.1 0-2-.9-2-2v-3c0-1.1.9-2 2-2zm-8.75 3.5c0-.41-.34-.75-.75-.75s-.75.34-.75.75s.34.75.75.75s.75-.34.75-.75M13 4v7H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zM6.25 7.5c0-.41-.34-.75-.75-.75s-.75.34-.75.75s.34.75.75.75s.75-.34.75-.75");
}
</style><path class="r2s2lxbiy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:round-dynamic-form"} {...others} />);
}

export default Component;
